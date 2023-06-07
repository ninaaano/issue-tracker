//
//  IssueCardCell.swift
//  issue-tracker
//
//  Created by PJB on 2023/05/16.
//

import UIKit

final class IssueCardCell: UICollectionViewCell {
    static let identifier = "Cell"
    
    var titleLabel = CustomLabelView(text: "제목", alignment: .left, font: .systemFont(ofSize: 18, weight: .bold))
    var explanationLabel: CustomLabelView = {
        let label = CustomLabelView(text: "안녕하세요이번PR도잘부탁드립니다", alignment: .left, font: FontStyle.body.font)
        label.numberOfLines = 2
        return label
    }()
    var milestoneLabel = CustomLabelView(text: "마일스톤", alignment: .left, font: FontStyle.body.font)
    var labelStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.spacing = 10
        stackView.alignment = .leading
        stackView.distribution = .fillProportionally
        return stackView
    }()
    private let milestoneImage = UIImageView(image: UIImage(named: TabBarType.milestone.image))
    private let informationArrowImage: UIImageView = {
        let imageView = UIImageView()
        let imageConfig = UIImage.SymbolConfiguration(pointSize: 14, weight: .medium)
        imageView.image = UIImage(systemName: SFsymbol.chevronRight.rawValue, withConfiguration: imageConfig)
        imageView.contentMode = .center
        imageView.tintColor = ColorValue.gray700
        return imageView
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        self.configureIssueCardCell()
        self.layoutContentView()
        self.layoutIssueCardCell()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
    
    private func layoutIssueCardCell() {
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        informationArrowImage.translatesAutoresizingMaskIntoConstraints = false
        explanationLabel.translatesAutoresizingMaskIntoConstraints = false
        milestoneImage.translatesAutoresizingMaskIntoConstraints = false
        milestoneLabel.translatesAutoresizingMaskIntoConstraints = false
        labelStackView.translatesAutoresizingMaskIntoConstraints = false
        
        NSLayoutConstraint.activate([
            titleLabel.topAnchor.constraint(equalTo: self.contentView.topAnchor, constant: 16),
            titleLabel.leadingAnchor.constraint(equalTo: self.contentView.leadingAnchor, constant: 24),
            titleLabel.heightAnchor.constraint(equalToConstant: 32)
        ])
        
        NSLayoutConstraint.activate([
            informationArrowImage.trailingAnchor.constraint(equalTo: self.contentView.trailingAnchor, constant: -16),
            informationArrowImage.leadingAnchor.constraint(equalTo: titleLabel.trailingAnchor, constant: 4),
            informationArrowImage.centerYAnchor.constraint(equalTo: titleLabel.centerYAnchor),
            informationArrowImage.widthAnchor.constraint(equalToConstant: 30),
            informationArrowImage.heightAnchor.constraint(equalToConstant: 30)
        ])
        
        NSLayoutConstraint.activate([
            explanationLabel.topAnchor.constraint(equalTo: titleLabel.bottomAnchor, constant: 4),
            explanationLabel.leadingAnchor.constraint(equalTo: self.contentView.leadingAnchor, constant: 24),
            explanationLabel.trailingAnchor.constraint(equalTo: self.contentView.trailingAnchor, constant: -16)
        ])
        
        NSLayoutConstraint.activate([
            milestoneImage.leadingAnchor.constraint(equalTo: self.contentView.leadingAnchor, constant: 24),
            milestoneImage.trailingAnchor.constraint(equalTo: milestoneLabel.leadingAnchor, constant: -4),
            milestoneImage.widthAnchor.constraint(equalToConstant: 17),
            milestoneImage.centerYAnchor.constraint(equalTo: milestoneLabel.centerYAnchor)
        ])
        
        NSLayoutConstraint.activate([
            milestoneLabel.topAnchor.constraint(equalTo: explanationLabel.bottomAnchor, constant: 4),
            milestoneLabel.trailingAnchor.constraint(equalTo: self.contentView.trailingAnchor, constant: -16),
            milestoneLabel.heightAnchor.constraint(equalToConstant: 24)
        ])
        
        NSLayoutConstraint.activate([
            labelStackView.topAnchor.constraint(equalTo: milestoneLabel.bottomAnchor, constant: 4),
            labelStackView.leadingAnchor.constraint(equalTo: self.contentView.leadingAnchor, constant: 24),
            labelStackView.heightAnchor.constraint(equalToConstant: 24)
        ])
    }
    
    private func configureIssueCardCell() {
        self.contentView.backgroundColor = .white
        
        [titleLabel, informationArrowImage, explanationLabel, milestoneImage, milestoneLabel, labelStackView].forEach {
            self.contentView.addSubview($0)
        }
    }
    
    private func layoutContentView() {
        self.contentView.translatesAutoresizingMaskIntoConstraints = false
        
        guard let superview = self.contentView.superview else {
            return
        }
        
        NSLayoutConstraint.activate([
            self.contentView.topAnchor.constraint(equalTo: superview.topAnchor),
            self.contentView.leadingAnchor.constraint(equalTo: superview.leadingAnchor),
            self.contentView.trailingAnchor.constraint(equalTo: superview.trailingAnchor),
            self.contentView.bottomAnchor.constraint(equalTo: superview.bottomAnchor)
        ])
    }
}
