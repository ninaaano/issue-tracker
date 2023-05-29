//
//  IssueListHeaderView.swift
//  issue-tracker
//
//  Created by PJB on 2023/05/16.
//

import UIKit

final class IssueListHeaderView: UICollectionReusableView {
    static let identifier = "IssueListHeaderView"
    
    var title: UILabel = {
        let title = UILabel()
        title.font = FontStyle.titleStrong.font
        title.textColor = .black
        title.textAlignment = .left
        return title
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configureHeaderView()
        layoutHeaderView()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
    
    private func configureHeaderView() {
        self.addSubview(self.title)
        self.backgroundColor = .white
    }
    
    private func layoutHeaderView() {
        self.title.translatesAutoresizingMaskIntoConstraints = false

        NSLayoutConstraint.activate([
            self.title.leadingAnchor.constraint(equalTo: self.leadingAnchor, constant: 16),
            self.title.centerYAnchor.constraint(equalTo: self.centerYAnchor)
        ])
    }
}
