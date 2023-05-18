//
//  FontStyle.swift
//  issue-tracker
//
//  Created by apple on 2023/05/15.
//

import UIKit

enum Weight {
    static let bold = UIFont.Weight.semibold
    static let regular = UIFont.Weight.medium
}

enum FontSize {
    case xxLarge
    case xLarge
    case large
    case medium
    case small
    
    var size: CGFloat {
        switch self {
        case .xxLarge:
            return 32
        case .xLarge:
            return 24
        case .large:
            return 18
        case .medium:
            return 15
        case .small:
            return 12
        }
    }
    
    var lienLength: CGFloat {
        switch self {
        case .xxLarge:
            return 48
        case .xLarge:
            return 40
        case .large:
            return 32
        case .medium:
            return 28
        case .small:
            return 20
        }
    }
}
      
struct Factor {
    let font: UIFont
    let lineLength: CGFloat
}

enum FontStyle {
    static let body = Factor(font: .systemFont(ofSize: FontSize.medium.size, weight: Weight.regular),
                             lineLength: FontSize.medium.lienLength)
    static let bodyMiedium = Factor(font: .systemFont(ofSize: FontSize.medium.size, weight: Weight.bold),
                                    lineLength: FontSize.medium.lienLength)
    static let title = Factor(font: .systemFont(ofSize: FontSize.large.size, weight: Weight.bold),
                              lineLength: FontSize.large.lienLength)
    static let titleMedium = Factor(font: .systemFont(ofSize: FontSize.xLarge.size, weight: Weight.regular),
                                    lineLength: FontSize.xLarge.lienLength)
    static let titleStrong = Factor(font: .systemFont(ofSize: FontSize.xxLarge.size, weight: Weight.regular),
                                    lineLength: FontSize.xxLarge.lienLength)
    static let button = Factor(font: .systemFont(ofSize: FontSize.medium.size, weight: Weight.bold),
                               lineLength: FontSize.medium.lienLength)
    static let buttonWeek = Factor(font: .systemFont(ofSize: FontSize.small.size, weight: Weight.bold),
                                   lineLength: FontSize.small.lienLength)
    static let buttonStrong = Factor(font: .systemFont(ofSize: FontSize.large.size, weight: Weight.bold),
                                     lineLength: FontSize.large.lienLength)
    static let placehold = Factor(font: .systemFont(ofSize: FontSize.medium.size, weight: Weight.bold),
                                  lineLength: FontSize.medium.lienLength)
    static let caption = Factor(font: .systemFont(ofSize: FontSize.small.size, weight: Weight.bold),
                                lineLength: FontSize.small.lienLength)
    static let label = Factor(font: .systemFont(ofSize: FontSize.small.size, weight: Weight.bold),
                              lineLength: FontSize.small.lienLength)
    static let sectionItem = Factor(font: .systemFont(ofSize: FontSize.large.size, weight: Weight.regular),
                                    lineLength: FontSize.large.lienLength)
}
