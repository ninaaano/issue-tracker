//
//  CustomCapsuleLabel.swift
//  issue-tracker
//
//  Created by PJB on 2023/05/25.
//

import UIKit
class CustomCapsuleLabel: UILabel {
    private static let padding = UIEdgeInsets(top: 4.0, left: 16.0, bottom: 4.0, right: 16.0)
    override var intrinsicContentSize: CGSize {
        var contentSize = super.intrinsicContentSize
        contentSize.width += Self.padding.left + Self.padding.right
        contentSize.height += Self.padding.top + Self.padding.bottom
        return contentSize
    }
    
    convenience init(name: String, textColor: String, backgroundColor: String, font: UIFont) {
        self.init()
        self.text = name
        self.font = font
        self.textColor = .black
        setBackgroundColor(backgroundColor)
    }
    
    override func drawText(in rect: CGRect) {
        super.drawText(in: rect.inset(by: Self.padding))
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        layer.cornerRadius = bounds.height / 2
        layer.masksToBounds = true
    }
    
    func setBackgroundColor(_ colorHex: String) {
        let value = Int(colorHex.dropFirst(2), radix: 16) ?? 0
        let red = (value >> 16) & 0xFF
        let green = (value >> 8) & 0xFF
        let blue = value & 0xFF

        self.backgroundColor = UIColor(red: CGFloat(red) / 255, green: CGFloat(green) / 255, blue: CGFloat(blue) / 255, alpha: 1)
    }
}
