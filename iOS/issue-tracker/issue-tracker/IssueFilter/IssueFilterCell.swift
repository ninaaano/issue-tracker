//
//  IssueFilterCell.swift
//  issue-tracker
//
//  Created by apple on 2023/05/15.
//

import UIKit

final class IssueFilterCell: UICollectionViewCell {
    static let identifier = "IssueFilterViewCell"
    
    private let filterItemNameLabel: UILabel = {
        let label = UILabel()
        label.textColor = .black
        label.text = "테스트입니다"
        label.font = FontStyle.sectionItem.font
        return label
    }()
    
    private let checkImage: UIImageView = {
        let imageView = UIImageView()
        let imageConfig = UIImage.SymbolConfiguration(pointSize: 14, weight: .semibold)
        imageView.image = UIImage(systemName: "checkmark", withConfiguration: imageConfig)
        imageView.contentMode = .center
        imageView.tintColor = ColorValue.gray700
        return imageView
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configureIssueFilterCell()
        layoutIssueFilterCell()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
    
    private func configureIssueFilterCell() {
        self.contentView.backgroundColor = .white
        [
            filterItemNameLabel,
            checkImage
        ].forEach { self.contentView.addSubview($0) }
    }
    
    private func layoutIssueFilterCell() {
        checkImage.translatesAutoresizingMaskIntoConstraints = false
        filterItemNameLabel.translatesAutoresizingMaskIntoConstraints = false
        
        NSLayoutConstraint.activate([
            self.contentView.topAnchor.constraint(equalTo: self.topAnchor),
            self.contentView.bottomAnchor.constraint(equalTo: self.bottomAnchor),
            self.contentView.leadingAnchor.constraint(equalTo: self.leadingAnchor),
            self.contentView.trailingAnchor.constraint(equalTo: self.trailingAnchor)
        ])
        
        NSLayoutConstraint.activate([
            checkImage.trailingAnchor.constraint(equalTo: self.contentView.trailingAnchor, constant: -16),
            checkImage.centerYAnchor.constraint(equalTo: self.contentView.centerYAnchor),
            checkImage.heightAnchor.constraint(equalToConstant: 30),
            checkImage.widthAnchor.constraint(equalToConstant: 30)
        ])
        
        NSLayoutConstraint.activate([
            filterItemNameLabel.heightAnchor.constraint(equalToConstant: 32),
            filterItemNameLabel.leadingAnchor.constraint(equalTo: self.contentView.leadingAnchor, constant: 20),
            filterItemNameLabel.centerYAnchor.constraint(equalTo: self.contentView.centerYAnchor),
            filterItemNameLabel.trailingAnchor.constraint(equalTo: checkImage.leadingAnchor, constant: -4)
        ])
    }
    
    override var isSelected: Bool {
        didSet {
            if self.isSelected == true {
                self.checkImage.tintColor = ColorValue.blue
            } else {
                self.checkImage.tintColor = ColorValue.gray700
            }
        }
    }
}
