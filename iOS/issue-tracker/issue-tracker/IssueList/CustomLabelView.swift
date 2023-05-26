//
//  TitleView.swift
//  issue-tracker
//
//  Created by PJB on 2023/05/17.
//

import UIKit

final class CustomLabelView: UILabel {
    
    init(text: String, alignment: NSTextAlignment, font: UIFont) {
        super.init(frame: CGRect())
        self.text = text
        self.textAlignment = alignment
        self.font = font
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
}
