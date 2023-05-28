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
    private var issueFilterCellRegistration: UICollectionView.CellRegistration<IssueFilterCell, FilterCellTitle>!
    private var issueFilterHeaderCellRegistration: UICollectionView.SupplementaryRegistration<IssueFilterHeaderView>!
    private let issuecFilterCollectionView: UICollectionView = UICollectionView(frame: .zero, collectionViewLayout: UICollectionViewFlowLayout())
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.issuecFilterCollectionView.delegate = self
        self.layoutIssueFilterCollectionView()
        self.configureNavigationBar()
        self.configureIssueFilterCollectionView()
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
    
    private func configureIssueFilterCollectionView() {
        self.issuecFilterCollectionView.allowsMultipleSelection = true
        self.issuecFilterCollectionView.backgroundColor = ColorValue.gray100
        
        self.issueFilterCellRegistration = UICollectionView.CellRegistration<IssueFilterCell, FilterCellTitle> { (cell, _, item) in
            cell.filterItemNameLabel.text = item.title
        }
        self.issueFilterHeaderCellRegistration = UICollectionView.SupplementaryRegistration<IssueFilterHeaderView>(elementKind: UICollectionView.elementKindSectionHeader) { (cell, _, indexPath) in
            let section = self.currentSnapShot.sectionIdentifiers[indexPath.section]
            cell.titleLabel.text = section.title
        }
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
        print("내마음 속에 저장")
    }
    
    @objc func backButtonTapped() {
        self.dismiss(animated: true)
    }
}

extension IssueFilterViewController {
    private func configueDataSource() {
        self.datasource = UICollectionViewDiffableDataSource<FilterSection, FilterCellTitle>(collectionView: self.issuecFilterCollectionView) { (collectionView: UICollectionView, indexPath: IndexPath, identifier: FilterCellTitle
        ) -> UICollectionViewCell? in
            return collectionView.dequeueConfiguredReusableCell(using: self.issueFilterCellRegistration, for: indexPath, item: identifier)
        }
        
        self.datasource.supplementaryViewProvider = { collectionView, kind, indexPath in
            return collectionView.dequeueConfiguredReusableSupplementary(using: self.issueFilterHeaderCellRegistration, for: indexPath)
        }
    }
    
    private func applySnapshot() {
        self.currentSnapShot = NSDiffableDataSourceSnapshot<FilterSection, FilterCellTitle>()
        currentSnapShot.appendSections([.status, .manager, .label, .milestone])
        currentSnapShot.appendItems(statusItem, toSection: .status)
        currentSnapShot.appendItems(managerItem, toSection: .manager)
        currentSnapShot.appendItems(labelItem, toSection: .label)
        currentSnapShot.appendItems(milestoneItem, toSection: .milestone)
        
        datasource.apply(currentSnapShot, animatingDifferences: true)
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
