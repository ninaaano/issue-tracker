//
//  IssueFilterViewController.swift
//  issue-tracker
//
//  Created by apple on 2023/05/15.
//

import UIKit

final class IssueFilterViewController: UIViewController {
    private var datasource: UICollectionViewDiffableDataSource<FilterSection, FilterCellTitle>!
    private var currentSnapShot: NSDiffableDataSourceSnapshot<FilterSection, FilterCellTitle>!
    private let issuecFilterCollectionView: UICollectionView = UICollectionView(frame: .zero, collectionViewLayout: UICollectionViewFlowLayout())
    private var filterManager: FilteringModel = FilteringModel()
    var didFilterData: ((FilteringModel) -> Void)?
    var stateItem: [FilterCellTitle] = [
        FilterCellTitle(section: .state, title: "열린 이슈"),
        FilterCellTitle(section: .writer, title: "내가 작성한 이슈"),
        FilterCellTitle(section: .comment, title: "내가 댓글을 남긴 이슈"),
        FilterCellTitle(section: .state, title: "닫힌 이슈")
    ]
    var assignItem: [FilterCellTitle] = []
    var labelitem: [FilterCellTitle] = []
    var milestoneItem: [FilterCellTitle] = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.issuecFilterCollectionView.allowsMultipleSelection = true
        self.issuecFilterCollectionView.backgroundColor = ColorValue.gray100
        self.issuecFilterCollectionView.delegate = self
        self.layoutIssueFilterCollectionView()
        self.configureNavigationBar()
        self.configueDataSource()
        self.applySnapshot()
    }
    
private func configureNavigationBar() {
        self.title = "필터"
        self.navigationController?.navigationBar.titleTextAttributes = [.font: FontStyle.title.font]
        
        let cancelButton = UIBarButtonItem(title: "취소", style: .plain, target: self, action: #selector(backButtonTapped))
        cancelButton.setTitleTextAttributes([.font: FontStyle.title.font], for: .normal)
        self.navigationItem.leftBarButtonItem = cancelButton
        
        let saveButtonItem = UIBarButtonItem(title: "저장", style: .plain, target: self, action: #selector(saveButtonTapped))
        saveButtonItem.setTitleTextAttributes([.font: FontStyle.title.font], for: .normal)
        self.navigationItem.rightBarButtonItem = saveButtonItem
    }
    
    private func layoutIssueFilterCollectionView() {
        self.issuecFilterCollectionView.translatesAutoresizingMaskIntoConstraints = false
        self.view.addSubview(issuecFilterCollectionView)
        
        NSLayoutConstraint.activate([
            self.issuecFilterCollectionView.topAnchor.constraint(equalTo: view.topAnchor),
            self.issuecFilterCollectionView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            self.issuecFilterCollectionView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            self.issuecFilterCollectionView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
    }
    
    @objc func saveButtonTapped() {
        if let didFilterData = didFilterData {
            didFilterData(filterManager)
        }
        self.dismiss(animated: true)
    }
    
    @objc func backButtonTapped() {
        self.dismiss(animated: true)
    }
}

extension IssueFilterViewController: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, referenceSizeForHeaderInSection section: Int) -> CGSize {
        let width = collectionView.bounds.width
        let height: CGFloat = 44
        
        return CGSize(width: width, height: height)
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        let width = collectionView.bounds.width
        let height: CGFloat = 44
        
        return CGSize(width: width, height: height)
    }

    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumLineSpacingForSectionAt section: Int) -> CGFloat {
        return 1.0
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, insetForSectionAt section: Int) -> UIEdgeInsets {
        UIEdgeInsets(top: 1, left: 0, bottom: 4, right: 0)
    }
}

extension IssueFilterViewController: DiffableDataSourceManager {
    typealias ItemIndetifierType = FilterCellTitle
    typealias CellType = IssueFilterCell
    typealias ReusableView = IssueFilterHeaderView
    
    func createListCellRegistration() -> UICollectionView.CellRegistration<IssueFilterCell, FilterCellTitle> {
        return UICollectionView.CellRegistration<IssueFilterCell, FilterCellTitle> { (cell, _, item) in
            cell.filterItemNameLabel.text = item.title
            cell.checkCell = self.cellCheckClosure(item: item)
            cell.removeCell = self.cellRemoveClosure(item: item)
        }
    }
    
    private func cellCheckClosure(item: FilterCellTitle) -> (() -> Void) {
        return {
            switch item.section {
            case .state:
                if item.title == "열린 이슈" {
                    self.filterManager.openCheck = true
                } else {
                    self.filterManager.closeCheck = true
                }
            case .writer:
                self.filterManager.writeCheck = "아켄"
            case .comment:
                self.filterManager.commentCheck = "아켄"
            case .assign:
                self.filterManager.assignCheck.append(item.title)
            case .label:
                self.filterManager.labelCheck.append(item.title)
            case .milestone:
                self.filterManager.milestoneCheck.append(item.title)
            }
        }
    }
    
    private func cellRemoveClosure(item: FilterCellTitle) -> (() -> Void) {
        return {
            switch item.section {
            case .state:
                if item.title == "열린 이슈" {
                    self.filterManager.openCheck = false
                } else {
                    self.filterManager.closeCheck = false
                }
            case .writer:
                self.filterManager.writeCheck = ""
            case .comment:
                self.filterManager.commentCheck = ""
            case .assign:
                self.filterManager.assignCheck.removeAll { $0 == item.title }
            case .label:
                self.filterManager.labelCheck.removeAll { $0 == item.title}
            case .milestone:
                self.filterManager.milestoneCheck.removeAll { $0 == item.title}
            }
        }
    }
    
    func createHeaderCellRegistration() -> UICollectionView.SupplementaryRegistration<IssueFilterHeaderView> {
        return UICollectionView.SupplementaryRegistration<IssueFilterHeaderView>(elementKind: UICollectionView.elementKindSectionHeader) { (cell, _, indexPath) in
            let section = self.currentSnapShot.sectionIdentifiers[indexPath.section]
            cell.titleLabel.text = section.title
        }
    }
    
    private func configueDataSource() {
        let listCellRegistration = createListCellRegistration()
        let headerCellRegistration = createHeaderCellRegistration()
        
        self.datasource = UICollectionViewDiffableDataSource<FilterSection, FilterCellTitle>(collectionView: self.issuecFilterCollectionView) { (collectionView: UICollectionView, indexPath: IndexPath, identifier: FilterCellTitle
        ) -> UICollectionViewCell? in
            return collectionView.dequeueConfiguredReusableCell(using: listCellRegistration, for: indexPath, item: identifier)
        }
        
        self.datasource.supplementaryViewProvider = { collectionView, _, indexPath in
            return collectionView.dequeueConfiguredReusableSupplementary(using: headerCellRegistration, for: indexPath)
        }
    }
    
    func applySnapshot() {
        self.currentSnapShot = NSDiffableDataSourceSnapshot<FilterSection, FilterCellTitle>()
        self.currentSnapShot.appendSections([.state, .assign, .label, .milestone])
        self.currentSnapShot.appendItems(self.stateItem, toSection: .state)
        self.currentSnapShot.appendItems(self.assignItem, toSection: .assign)
        self.currentSnapShot.appendItems(self.labelitem, toSection: .label)
        self.currentSnapShot.appendItems(self.milestoneItem, toSection: .milestone)
        
        self.datasource.apply(self.currentSnapShot, animatingDifferences: true)
    }
}
