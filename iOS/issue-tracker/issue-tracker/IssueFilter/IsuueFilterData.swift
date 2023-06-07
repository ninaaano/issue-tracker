//
//  IsuueFilterData.swift
//  issue-tracker
//
//  Created by apple on 2023/05/25.
//

import Foundation

enum FilterSection {
    case state
    case writer
    case comment
    case assign
    case label
    case milestone
    
    var title: String {
        switch self {
        case .state:
            return "상태"
        case .writer:
            return "작성자"
        case .comment:
            return "댓글"
        case .assign:
            return "관리자"
        case .label:
            return "라벨"
        case .milestone:
            return "마일스톤"
        }
    }
}

struct FilterCellTitle: Hashable {
    let section: FilterSection
    let title: String
}
