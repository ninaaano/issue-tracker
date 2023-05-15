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
    case XXL
    case XL
    case L
    case M
    case S
    
    var size: CGFloat {
        switch self {
        case .XXL:
            return 32
        case .XL:
            return 24
        case .L:
            return 18
        case .M:
            return 15
        case .S:
            return 12
        }
    }
    
    var lienLength: CGFloat {
        switch self {
        case .XXL:
            return 48
        case .XL:
            return 40
        case .L:
            return 32
        case .M:
            return 28
        case .S:
            return 20
        }
    }
}
      
struct Factor {
    let font: UIFont
    let lineLength: CGFloat
}


enum FontStyle {
    static let body = Factor(font: .systemFont(ofSize: FontSize.M.size, weight: Weight.regular),
                             lineLength: FontSize.M.lienLength)
    static let bodyMiedium = Factor(font: .systemFont(ofSize: FontSize.M.size, weight: Weight.bold),
                                    lineLength: FontSize.M.lienLength)
    static let title = Factor(font: .systemFont(ofSize: FontSize.L.size, weight: Weight.bold),
                              lineLength: FontSize.L.lienLength)
    static let titleMedium = Factor(font: .systemFont(ofSize: FontSize.XL.size, weight: Weight.regular),
                                    lineLength: FontSize.XL.lienLength)
    static let titleStrong = Factor(font: .systemFont(ofSize: FontSize.XXL.size, weight: Weight.regular),
                                    lineLength: FontSize.XXL.lienLength)
    static let button = Factor(font: .systemFont(ofSize: FontSize.M.size, weight: Weight.bold),
                               lineLength: FontSize.M.lienLength)
    static let buttonWeek = Factor(font: .systemFont(ofSize: FontSize.S.size, weight: Weight.bold),
                                   lineLength: FontSize.S.lienLength)
    static let buttonStrong = Factor(font: .systemFont(ofSize: FontSize.L.size, weight: Weight.bold),
                                     lineLength: FontSize.L.lienLength)
    static let placehold = Factor(font: .systemFont(ofSize: FontSize.M.size, weight: Weight.bold),
                                  lineLength: FontSize.M.lienLength)
    static let caption = Factor(font: .systemFont(ofSize: FontSize.S.size, weight: Weight.bold),
                                lineLength: FontSize.S.lienLength)
    static let label = Factor(font: .systemFont(ofSize: FontSize.S.size, weight: Weight.bold),
                              lineLength: FontSize.S.lienLength)
}
