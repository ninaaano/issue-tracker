//
//  IssueFilterCell.swift
//  issue-tracker
//
//  Created by apple on 2023/05/15.
//

import UIKit

final class IssueFilterCell: UICollectionViewCell {
    static let identifier = "IssueFilterViewCell"
    var isChecked = false
    
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
        setupSubviews()
        setupConstraints()
        setupCheckImage()
        setupFilterItemNameLabel()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
    
    private func setupSubviews() {
        [
            filterItemNameLabel,
            checkImage
        ].forEach { contentView.addSubview($0) }
    }
    
    private func setupConstraints() {
        contentView.backgroundColor = .white
        NSLayoutConstraint.activate([
            contentView.topAnchor.constraint(equalTo: self.topAnchor),
            contentView.bottomAnchor.constraint(equalTo: self.bottomAnchor),
            contentView.leadingAnchor.constraint(equalTo: self.leadingAnchor),
            contentView.trailingAnchor.constraint(equalTo: self.trailingAnchor)
        ])
    }
    
    private func setupCheckImage() {
        checkImage.translatesAutoresizingMaskIntoConstraints = false
        
        NSLayoutConstraint.activate([
            checkImage.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -16),
            checkImage.centerYAnchor.constraint(equalTo: contentView.centerYAnchor),
            checkImage.heightAnchor.constraint(equalToConstant: 30),
            checkImage.widthAnchor.constraint(equalToConstant: 30)
        ])
    }
    
    private func setupFilterItemNameLabel() {
        filterItemNameLabel.translatesAutoresizingMaskIntoConstraints = false
        
        NSLayoutConstraint.activate([
            filterItemNameLabel.heightAnchor.constraint(equalToConstant: 32),
            filterItemNameLabel.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 20),
            filterItemNameLabel.centerYAnchor.constraint(equalTo: contentView.centerYAnchor),
            filterItemNameLabel.trailingAnchor.constraint(equalTo: checkImage.leadingAnchor, constant: -4)
        ])
    }
    
    func updateCheckmarkState() {
        if self.isChecked {
            checkImage.tintColor = ColorValue.gray700
        } else {
            checkImage.tintColor = ColorValue.blue
        }
        self.isChecked.toggle()
    }
}
