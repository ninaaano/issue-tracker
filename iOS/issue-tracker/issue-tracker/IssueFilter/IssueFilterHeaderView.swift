//
//  File.swift
//  issue-tracker
//
//  Created by apple on 2023/05/17.
//

import UIKit

final class IssueFilterHeaderView: UICollectionReusableView {
    static let identifier = "IssueFilerHeaderView"
    
    let titleLabel: UILabel = {
        let label = UILabel()
        label.text = "테스트 헤더입니다."
        label.font = FontStyle.bodyMiedium.font
        label.textColor = ColorValue.gray800
        return label
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        self.backgroundColor = .white
        self.setupConstraints()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
    
    private func setupConstraints() {
        self.addSubview(self.titleLabel)
        self.titleLabel.translatesAutoresizingMaskIntoConstraints = false
        
        NSLayoutConstraint.activate([
            self.titleLabel.leadingAnchor.constraint(equalTo: self.leadingAnchor, constant: 16),
            self.titleLabel.trailingAnchor.constraint(equalTo: self.trailingAnchor, constant: -16),
            self.titleLabel.centerYAnchor.constraint(equalTo: self.centerYAnchor)
        ])
    }
}
