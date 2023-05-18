//
//  File.swift
//  issue-tracker
//
//  Created by apple on 2023/05/17.
//

import UIKit

class IssueFilterHeaderCell: UICollectionReusableView {
    static let identifier = "IssueFilerHeaderCell"
    
    private let titleLabel: UILabel = {
        let label = UILabel()
        label.text = "테스트 헤더입니다."
        label.font = FontStyle.bodyMiedium.font
        label.textColor = ColorValue.gray800
        label.translatesAutoresizingMaskIntoConstraints = false
        return label
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        self.backgroundColor = .white
        setupSubviews()
        setupConstraints()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    private func setupSubviews() {
        addSubview(titleLabel)
    }
    
    private func setupConstraints() {
        NSLayoutConstraint.activate([
            titleLabel.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 16),
            titleLabel.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -16),
            titleLabel.centerYAnchor.constraint(equalTo: centerYAnchor)
        ])
    }
}
