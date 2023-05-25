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
    static func == (lhs: Item, rhs: Item) -> Bool {
        return lhs.issueId == rhs.issueId
    }
    func hash(into hasher: inout Hasher) {
        hasher.combine(issueId)
    }
    
    let issueId: Int
    let issueTitle: String
    let isOpened: Bool
    let writer: Writer
    let assignee: [Assignee]
    let milestone: Milestone
    let label: [Label]
    let commentedUser: [String]
}

struct Writer: Codable {
    let userId: Int
    let name: String
    let url: String
    let createdAt: String
}

struct Assignee: Codable {
    let userId: Int
    let name: String
}

struct Milestone: Codable {
    let milestoneId: Int
    let milestoneName: String
}

struct Label: Codable {
    let labelId: Int
    let labelName: String
    let backgroundColor: String
    let textColor: String
}
