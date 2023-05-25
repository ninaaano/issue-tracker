//
//  IssueListSectionData.swift
//  issue-tracker
//
//  Created by PJB on 2023/05/25.
//

import Foundation

enum Section {
    case issue
    var title: String {
        switch self {
        case .issue:
            return "이슈"
        }
    }
}

struct Item: Codable, Hashable {
    let title: String
    let description: String
    let badge: [String]?
}
