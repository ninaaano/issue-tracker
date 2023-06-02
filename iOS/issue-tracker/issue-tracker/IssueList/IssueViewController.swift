//
//  ViewController.swift
//  issue-tracker
//
//  Created by PJB on 2023/05/10.
//

import UIKit

final class IssueViewController: UIViewController {
    private var dataSource: UICollectionViewDiffableDataSource<Section, Item>!
    private var currentSnapshot: NSDiffableDataSourceSnapshot<Section, Item>!
    private var itemHttpHandler = HTTPHandler<Item>()
    private var data: [Item] = []
    let issueListCollectionView: UICollectionView = UICollectionView(frame: .zero, collectionViewLayout: UICollectionViewFlowLayout())
    private let searchController = UISearchController(searchResultsController: nil)
    private let issueFilterNavigation = UINavigationController(rootViewController: IssueFilterViewController())

    override func viewDidLoad() {
        super.viewDidLoad()
        self.issueListCollectionView.backgroundColor = ColorValue.gray100
        self.issueListCollectionView.delegate = self
        self.searchController.searchResultsUpdater = self
        self.layoutIssueListCollectionView()
        self.configureDataSource()
        self.configureNavigationBar()
        self.setupData()
    }
    
    private func setupData() {
        self.itemHttpHandler.fetchIssue { result in
            switch result {
            case.success(let issueData):
                DispatchQueue.main.async {
                    self.data = issueData
                    self.configureSearchBar()
                }
            default:
                break
            }
        }
    }
    
    private func layoutIssueListCollectionView() {
        issueListCollectionView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(issueListCollectionView)
        
        NSLayoutConstraint.activate([
            issueListCollectionView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            issueListCollectionView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            issueListCollectionView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            issueListCollectionView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor)
        ])
    }
    
    private func configureNavigationBar() {
        self.navigationItem.title = "이슈"
        self.navigationController?.navigationBar.prefersLargeTitles = true
        self.navigationItem.rightBarButtonItem = UIBarButtonItem(title: "선택", style: .plain, target: self, action: nil)
        self.navigationItem.leftBarButtonItem = UIBarButtonItem(title: "필터", style: .plain, target: self, action: #selector(tappedFilterButton))
    }
    
    private func configureSearchBar() {
        self.navigationItem.searchController = searchController
        self.searchController.searchBar.placeholder = "검색"
        self.searchController.isActive = true
        self.searchController.searchBar.becomeFirstResponder()
    }
    
    @objc private func tappedFilterButton() {
        self.present(issueFilterNavigation, animated: true)
    }
    
    @objc private func tappedIssueButton() {
        let desiredOffset = CGPoint(x: 0, y: 0)
        issueListCollectionView.setContentOffset(desiredOffset, animated: true)
    }
}

extension IssueViewController: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        let width = view.frame.width
        let height: CGFloat = 148
        return CGSize(width: width, height: height)
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumLineSpacingForSectionAt section: Int) -> CGFloat {
        return 1.0
    }
}

extension IssueViewController: DiffableDataSourceManager {
    typealias ItemIndetifierType = Item
    typealias CellType = IssueCardCell
    
    func createListCellRegistration() -> UICollectionView.CellRegistration<IssueCardCell, Item> {
        return UICollectionView.CellRegistration<IssueCardCell, Item> { (cell, _, item) in
            cell.titleLabel.text = item.issueTitle
            cell.explanationLabel.text = item.createdAt
            cell.milestoneLabel.text = "마일스톤"
            cell.labelStackView.arrangedSubviews.forEach { $0.removeFromSuperview() }
            item.label.forEach { data in
                let custom = CustomCapsuleLabel(name: data.labelName, textColor: data.fontColor, backgroundColor: data.backgroundColor, font: FontStyle.label.font)
                cell.labelStackView.addArrangedSubview(custom)
            }
        }
    }

    private func configureDataSource() {
        let listCellRegistration = createListCellRegistration()
        
        self.dataSource = UICollectionViewDiffableDataSource<Section, Item>(collectionView: self.issueListCollectionView, cellProvider: { (collectionView, indexPath, itemIdentifier) -> UICollectionViewCell? in
            return collectionView.dequeueConfiguredReusableCell(using: listCellRegistration, for: indexPath, item: itemIdentifier)
        })
    }

    private func performQuery(with filter: String?) {
        let filtered = filteredData(with: filter)
        self.currentSnapshot = NSDiffableDataSourceSnapshot<Section, Item>()
        self.currentSnapshot.appendSections([.issue])
        self.currentSnapshot.appendItems(filtered, toSection: .issue)
        
        self.dataSource.apply(self.currentSnapshot)
    }
    
    private func filteredData(with filter: String?) -> [Item] {
        return self.data.filter { $0.contains(filter) }
    }
}

extension IssueViewController: UISearchResultsUpdating {
    func updateSearchResults(for searchController: UISearchController) {
        let text = searchController.searchBar.text
        performQuery(with: text)
    }
}
