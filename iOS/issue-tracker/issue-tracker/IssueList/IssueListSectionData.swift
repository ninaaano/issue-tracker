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
    let issueId: Int
    let issueTitle: String
    let isopened: Bool
    let createdAt: String
    let writer: Writer
    let assignee: [Writer]
    let milestone: Milestone
    let label: [Label]
    let comment: [Comment]
    
    static func == (lhs: Item, rhs: Item) -> Bool {
        return lhs.issueId == rhs.issueId
    }
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(issueId)
    }
    
    func contains(_ filter: String?) -> Bool {
        guard let filterText = filter else { return true }
        if filterText.isEmpty { return true }
        let lowercasedFilter = filterText.lowercased()
        return issueTitle.lowercased().contains(lowercasedFilter)
    }
}

struct Writer: Codable {
    let userId: Int
    let name: String
    let url: String
}

struct Milestone: Codable {
    let milestoneId: Int
    let milestoneName: String
}

struct Label: Codable {
    let labelId: Int
    let labelName: String
    let content: String
    let backgroundColor: String
    let fontColor: String
}

struct Comment: Codable {
    let commentId: Int
    let content: String
    let createdAt: String
    let commentUser: Writer
}
