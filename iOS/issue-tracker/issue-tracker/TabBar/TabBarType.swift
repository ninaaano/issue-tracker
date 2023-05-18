//
//  File.swift
//  issue-tracker
//
//  Created by PJB on 2023/05/12.
//

import UIKit

enum TabBarType {
    case issue
    case label
    case milestone
    
    var title: String {
        switch self {
        case .issue:
            return "이슈"
        case .label:
            return "레이블"
        case .milestone:
            return "마일스톤"
        }
    }
    
    var image: String {
        switch self {
        case .issue:
            return "Issue_Symbol"
        case .label:
            return "Label_Symbol"
        case .milestone:
            return "Milestone_Symbol"
        }
    }
}
