//
//  ViewController.swift
//  issue-tracker
//
//  Created by PJB on 2023/05/10.
//

import UIKit

class IssueViewController: UIViewController {
    
    private var issueListCollectionView: UICollectionView = {
        let collectionView = UICollectionView(frame: .zero, collectionViewLayout: UICollectionViewFlowLayout())
        return collectionView
    }()

    override func viewDidLoad() {
        super.viewDidLoad()
        issueListCollectionView.delegate = self
        issueListCollectionView.dataSource = self
        setRegister()
        setIssueCollectionView()
    }
    
    func setIssueCollectionView() {
        issueListCollectionView.backgroundColor = .systemBackground
        issueListCollectionView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(issueListCollectionView)
        
        NSLayoutConstraint.activate([
            issueListCollectionView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            issueListCollectionView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            issueListCollectionView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            issueListCollectionView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor)
        ])
    }
    
    func setRegister() {
        issueListCollectionView.register(IssueCardCell.self, forCellWithReuseIdentifier: IssueCardCell.identifier)
        issueListCollectionView.register(IssueListHeaderView.self, forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader, withReuseIdentifier: IssueListHeaderView.identifier)
    }
}

extension IssueViewController: UICollectionViewDelegate {
    
}

extension IssueViewController: UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return 10
    }
    
    func numberOfSections(in collectionView: UICollectionView) -> Int {
        return 1
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: IssueCardCell.identifier, for: indexPath) as? IssueCardCell else {
            return UICollectionViewCell()
        }
        cell.setIssueCardCell()
        return cell
    }
    
    func collectionView(_ collectionView: UICollectionView, viewForSupplementaryElementOfKind kind: String, at indexPath: IndexPath) -> UICollectionReusableView {
        switch kind {
        case UICollectionView.elementKindSectionHeader:
            guard let headerView = collectionView.dequeueReusableSupplementaryView(ofKind: kind, withReuseIdentifier: IssueListHeaderView.identifier, for: indexPath) as? IssueListHeaderView else {
                return UICollectionReusableView()
            }
            headerView.setHeaderViewTitle()
            return headerView
        default:
            return UICollectionReusableView()
        }
    }
}

extension IssueViewController: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, referenceSizeForHeaderInSection section: Int) -> CGSize {
        let width = view.frame.width
        let height: CGFloat = 48
        return CGSize(width: width, height: height)
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        let width = view.frame.width
        let height: CGFloat = 148
        return CGSize(width: width, height: height)
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumLineSpacingForSectionAt section: Int) -> CGFloat {
        return 1.0
    }
}
