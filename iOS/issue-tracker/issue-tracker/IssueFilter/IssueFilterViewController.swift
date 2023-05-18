//
//  IssueFilterViewController.swift
//  issue-tracker
//
//  Created by apple on 2023/05/15.
//

import UIKit

class IssueFilterViewController: UIViewController {
    
    let collectionView: UICollectionView = UICollectionView(frame: .zero, collectionViewLayout: UICollectionViewFlowLayout())
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.collectionView.register(IssueFilterCell.self, forCellWithReuseIdentifier: IssueFilterCell.identifier)
        self.collectionView.register(
            IssueFilterHeaderCell.self,
            forSupplementaryViewOfKind: UICollectionView.elementKindSectionHeader,
            withReuseIdentifier: IssueFilterHeaderCell.identifier
        )
        
        self.configureCollectionView()
        self.configureNavigationBar()
    }
    
    private func configureNavigationBar() {
        self.title = "필터"
        self.navigationController?.navigationBar.titleTextAttributes = [.font: FontStyle.title.font]

//        let backButton = UIBarButtonItem(image: UIImage(systemName: "chevron.left"))
        let cancelButton = UIBarButtonItem(title: "취소", style: .plain, target: self, action: #selector(backButtonTapped))
        
        self.navigationItem.backBarButtonItem = cancelButton
        
        let saveButtonItem = UIBarButtonItem(title: "저장", style: .plain, target: self, action: #selector(saveButtonTapped))
        saveButtonItem.setTitleTextAttributes([.font: FontStyle.title.font], for: .normal)
        self.navigationItem.rightBarButtonItem = saveButtonItem
    }
    
    private func configureCollectionView() {
        self.collectionView.dataSource = self
        self.collectionView.delegate = self
        
        self.collectionView.backgroundColor = ColorValue.gray100
        self.collectionView.translatesAutoresizingMaskIntoConstraints = false
        self.view.addSubview(collectionView)
        
        NSLayoutConstraint.activate([
            self.collectionView.topAnchor.constraint(equalTo: view.topAnchor),
            self.collectionView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            self.collectionView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            self.collectionView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
    }
    
    @objc func saveButtonTapped() {
        print("내마음 속에 저장")
//        navigationController?.popViewController(animated: true)
    }
    
    @objc func backButtonTapped() {
        print("back")
    }
}

extension IssueFilterViewController: UICollectionViewDataSource {
    func numberOfSections(in collectionView: UICollectionView) -> Int {
        return 3
    }
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return 3
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: IssueFilterCell.identifier, for: indexPath) as? IssueFilterCell else {
            return UICollectionViewCell()
        }
        return cell
    }
    
}

extension IssueFilterViewController: UICollectionViewDelegateFlowLayout {
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
    
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        let cell = collectionView.cellForItem(at: indexPath) as? IssueFilterCell
        cell?.updateCheckmarkState()
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, referenceSizeForHeaderInSection section: Int) -> CGSize {
        let width = collectionView.bounds.width
        let height: CGFloat = 44
        
        return CGSize(width: width, height: height)
    }
    
    func collectionView(_ collectionView: UICollectionView, viewForSupplementaryElementOfKind kind: String, at indexPath: IndexPath) -> UICollectionReusableView {
        guard kind == UICollectionView.elementKindSectionHeader,
              let header = collectionView.dequeueReusableSupplementaryView(ofKind: kind, withReuseIdentifier: IssueFilterHeaderCell.identifier, for: indexPath ) as? IssueFilterHeaderCell else {return UICollectionReusableView()}
        
        return header
    }
}
