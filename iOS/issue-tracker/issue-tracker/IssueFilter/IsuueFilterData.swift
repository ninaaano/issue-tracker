//
//  IsuueFilterData.swift
//  issue-tracker
//
//  Created by apple on 2023/05/25.
//

import Foundation

enum FilterSection {
    case status
    case manager
    case label
    case milestone
    
    var title: String {
        switch self {
        case .status:
            return "상태"
        case .manager:
            return "관지라"
        case .label:
            return "라벨"
        case .milestone:
            return "마일스톤"
        }
    }
}

struct FilterCellTitle: Hashable {
    let title: String
}

let statusItem: [FilterCellTitle] = ["열린 이슈", "내가 작성한 이슈", "내가 댓글을 남긴 이슈", "닫힌 이슈"].map{ FilterCellTitle(title: $0) }
let managerItem: [FilterCellTitle] = ["chole", "head", "sam", "zello"].map{ FilterCellTitle(title: $0) }
let labelItem: [FilterCellTitle] = ["레이블 없음", "그룹프로젝트: 이슈트레커"].map{ FilterCellTitle(title: $0) }
let milestoneItem: [FilterCellTitle] = ["마일스톤 없음"].map{ FilterCellTitle(title: $0) }
