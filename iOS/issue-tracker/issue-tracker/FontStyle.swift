//
//  FontStyle.swift
//  issue-tracker
//
//  Created by apple on 2023/05/15.
//

import UIKit

enum Weight {
    case bold
    case regular
    
    var fontWeight: UIFont.Weight {
        switch self {
        case .bold:
            return .semibold
        case .regular:
            return .medium
        }
    }
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
    case body, bodyMiedium
    case title, titleMedium, titleStrong
    case button, buttonWeek, buttonStrong
    case placehold
    case caption
    case label
    
    var font: Factor {
        switch self {
        case .body:
            return .init(font: .systemFont(ofSize: FontSize.M.size, weight: Weight.regular.fontWeight),
                         lineLength: FontSize.M.lienLength)
        case .bodyMiedium:
            return .init(font: .systemFont(ofSize: FontSize.M.size, weight: Weight.bold.fontWeight),
                         lineLength: FontSize.M.lienLength)
        case .title:
            return .init(font: .systemFont(ofSize: FontSize.L.size, weight: Weight.bold.fontWeight),
                         lineLength: FontSize.L.lienLength)
        case .titleMedium:
            return .init(font: .systemFont(ofSize: FontSize.XL.size, weight: Weight.regular.fontWeight),
                         lineLength: FontSize.XL.lienLength)
        case .titleStrong:
            return .init(font: .systemFont(ofSize: FontSize.XXL.size, weight: Weight.regular.fontWeight),
                         lineLength: FontSize.XXL.lienLength)
        case .button :
            return .init(font: .systemFont(ofSize: FontSize.M.size, weight: Weight.bold.fontWeight),
                         lineLength: FontSize.M.lienLength)
        case .buttonWeek:
            return .init(font: .systemFont(ofSize: FontSize.S.size, weight: Weight.bold.fontWeight),
                         lineLength: FontSize.S.lienLength)
        case .buttonStrong:
            return .init(font: .systemFont(ofSize: FontSize.L.size, weight: Weight.bold.fontWeight),
                         lineLength: FontSize.L.lienLength)
        case .placehold:
            return .init(font: .systemFont(ofSize: FontSize.M.size, weight: Weight.bold.fontWeight),
                         lineLength: FontSize.M.lienLength)
        case .caption:
            return .init(font: .systemFont(ofSize: FontSize.S.size, weight: Weight.bold.fontWeight),
                         lineLength: FontSize.S.lienLength)
        case .label:
            return .init(font: .systemFont(ofSize: FontSize.S.size, weight: Weight.bold.fontWeight),
                         lineLength: FontSize.S.lienLength)
        }
    }
}
