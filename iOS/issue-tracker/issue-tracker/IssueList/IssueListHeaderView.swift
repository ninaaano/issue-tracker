//
//  IssueListHeaderView.swift
//  issue-tracker
//
//  Created by PJB on 2023/05/16.
//

import UIKit

final class IssueListHeaderView: UICollectionReusableView {
    static let identifier = "HeaderView"
    
    private(set) var title: UILabel = {
        let title = UILabel()
        title.text = "이슈"
        title.textAlignment = .left
        title.font = FontStyle.titleStrong.font
        title.textColor = .black
        return title
    }()
    
    func setHeaderViewTitle() {
        addSubview(title)

        title.translatesAutoresizingMaskIntoConstraints = false

        NSLayoutConstraint.activate([
            title.leadingAnchor.constraint(equalTo: self.leadingAnchor, constant: 16),
            title.centerYAnchor.constraint(equalTo: self.centerYAnchor)
        ])
    }
}
