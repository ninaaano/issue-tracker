//
//  IssueFilterViewController.swift
//  issue-tracker
//
//  Created by apple on 2023/05/15.
//

import UIKit

final class IssueFilterViewController: UIViewController {
    private let issueFilterHeaders = MockHeaderData()
    
    private let issuecFilterCollectionView: UICollectionView = UICollectionView(frame: .zero, collectionViewLayout: UICollectionViewFlowLayout())
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.issuecFilterCollectionView.dataSource = self
        self.issuecFilterCollectionView.delegate = self
        self.layoutIssueFilterCollectionView()
        self.configureNavigationBar()
        self.configureIssueFilterCollectionView()
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
        self.issuecFilterCollectionView.register(IssueFilterCell.self, forCellWithReuseIdentifier: IssueFilterCell.identifier)
        self.issuecFilterCollectionView.register(
            IssueFilterHeaderView.self,
            forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader,
            withReuseIdentifier: IssueFilterHeaderView.identifier
        )
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

extension IssueFilterViewController: UICollectionViewDataSource {
    func numberOfSections(in collectionView: UICollectionView) -> Int {
        return issueFilterHeaders.title.count
    }
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return 4
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: IssueFilterCell.identifier, for: indexPath) as? IssueFilterCell else {
            return UICollectionViewCell()
        }
        return cell
    }
    
    func collectionView(_ collectionView: UICollectionView, viewForSupplementaryElementOfKind kind: String, at indexPath: IndexPath) -> UICollectionReusableView {
        guard kind == UICollectionView.elementKindSectionHeader,
              let header = collectionView.dequeueReusableSupplementaryView(ofKind: kind, withReuseIdentifier: IssueFilterHeaderView.identifier, for: indexPath ) as? IssueFilterHeaderView else {
            return UICollectionReusableView()
        }
        header.configureTitle(of: issueFilterHeaders.title[indexPath.section])
        return header
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
