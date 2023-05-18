//
//  IssueCardCell.swift
//  issue-tracker
//
//  Created by PJB on 2023/05/16.
//

import UIKit

final class IssueCardCell: UICollectionViewCell {
    static let identifier = "Cell"
    
    private(set) var title = CustomLabelView(text: "제목", alignment: .left, font: .systemFont(ofSize: 18, weight: .bold))
    private(set) var explanation = CustomLabelView(text: "안녕하세요이번PR도잘부탁드립니다", alignment: .left, font: FontStyle.body.font)
    private(set) var milestone = CustomLabelView(text: "마일스톤", alignment: .left, font: FontStyle.body.font)
    private(set) var label = CustomLabelView(text: "레이블", alignment: .left, font: FontStyle.body.font)
    private(set) var milestoneImage = UIImageView(image: UIImage(named: TabBarType.milestone.image))
    private(set) var informationArrowImage: UIImageView = {
        let imageView = UIImageView()
        let imageConfig = UIImage.SymbolConfiguration(pointSize: 14, weight: .medium)
        imageView.image = UIImage(systemName: SFsymbol.chevronRight.rawValue, withConfiguration: imageConfig)
        imageView.contentMode = .center
        imageView.tintColor = ColorValue.gray700
        return imageView
    }()
    
    private func setTitle() {
        title.translatesAutoresizingMaskIntoConstraints = false
        
        NSLayoutConstraint.activate(
            [title.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 16),
             title.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 24),
             title.heightAnchor.constraint(equalToConstant: 32)]
        )
    }
    
    private func setInformationArrowImage() {
        informationArrowImage.translatesAutoresizingMaskIntoConstraints = false
        
        NSLayoutConstraint.activate(
            [informationArrowImage.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -16),
             informationArrowImage.leadingAnchor.constraint(equalTo: title.trailingAnchor, constant: 4),
             informationArrowImage.centerYAnchor.constraint(equalTo: title.centerYAnchor),
             informationArrowImage.widthAnchor.constraint(equalToConstant: 30),
             informationArrowImage.heightAnchor.constraint(equalToConstant: 30)]
        )
    }
    
    private func setExplanation() {
        explanation.numberOfLines = 2
        explanation.lineBreakMode = .byTruncatingTail
        explanation.translatesAutoresizingMaskIntoConstraints = false
        
        NSLayoutConstraint.activate([
            explanation.topAnchor.constraint(equalTo: title.bottomAnchor, constant: 4),
            explanation.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 24),
            explanation.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -16)
        ])
    }
    
    private func setMilestoneImage() {
        milestoneImage.translatesAutoresizingMaskIntoConstraints = false
        
        NSLayoutConstraint.activate(
            
            [milestoneImage.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 24),
             milestoneImage.trailingAnchor.constraint(equalTo: milestone.leadingAnchor, constant: -4),
             milestoneImage.widthAnchor.constraint(equalToConstant: 17),
             milestoneImage.centerYAnchor.constraint(equalTo: milestone.centerYAnchor)]
        )
    }
    
    private func setMilestone() {
        milestone.translatesAutoresizingMaskIntoConstraints = false
        
        NSLayoutConstraint.activate(
            [milestone.topAnchor.constraint(equalTo: explanation.bottomAnchor, constant: 4),
             milestone.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -16),
             milestone.heightAnchor.constraint(equalToConstant: 24)]
        )
    }
    
    private func setLabel() {
        label.translatesAutoresizingMaskIntoConstraints = false
        label.backgroundColor = .blue
        label.textColor = .white
        label.layer.cornerRadius = 12
        label.clipsToBounds = true
        label.textAlignment = .center
        
        NSLayoutConstraint.activate(
            [label.topAnchor.constraint(equalTo: milestone.bottomAnchor, constant: 4),
             label.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 24),
             label.widthAnchor.constraint(equalToConstant: 66),
             label.heightAnchor.constraint(equalToConstant: 24)]
        )
    }
    
    private func setComponents() {
        setTitle()
        setExplanation()
        setMilestone()
        setLabel()
        setMilestoneImage()
        setInformationArrowImage()
    }
    
    func setIssueCardCell() {
        [title, informationArrowImage, explanation, milestoneImage, milestone, label].forEach {
            contentView.addSubview($0)
        }
        setComponents()
        contentView.layer.borderWidth = 0.5
        contentView.layer.borderColor = UIColor.gray.cgColor
        contentView.translatesAutoresizingMaskIntoConstraints = false
        
        guard let superview = contentView.superview else {
            return
        }
        
        NSLayoutConstraint.activate(
            [contentView.topAnchor.constraint(equalTo: superview.topAnchor),
             contentView.leadingAnchor.constraint(equalTo: superview.leadingAnchor),
             contentView.trailingAnchor.constraint(equalTo: superview.trailingAnchor),
             contentView.bottomAnchor.constraint(equalTo: superview.bottomAnchor)]
        )
    }
}
