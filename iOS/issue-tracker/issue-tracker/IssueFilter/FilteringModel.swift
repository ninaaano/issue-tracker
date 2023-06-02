//
//  File.swift
//  issue-tracker
//
//  Created by apple on 2023/05/31.
//

import Foundation

struct FilteringModel {
    var openCheck: Bool = false
    var closeCheck: Bool = false
    var writeCheck: String = ""
    var commentCheck: String = ""
    var assignCheck: [String] = []
    var labelCheck: [String] = []
    var milestoneCheck: [String] = []
    
    func filteredState(from data: [Item]) -> [Item] {
        if (self.openCheck && self.closeCheck) || (!self.openCheck && !self.closeCheck) {
            return data
        }
        
        let result = data.filter { $0.isopened == self.openCheck || $0.isopened == self.closeCheck}
        
        return result
    }
    
    func filteredWrite(from data: [Item]) -> [Item] {
        if writeCheck == "" {
            return data
        }
        
        let result = data.filter { $0.writer.name == writeCheck}
        
        return result
    }
    
    func filteredComment(from data: [Item]) -> [Item] {
        if commentCheck == "" {
            return data
        }
        
        let result = data.filter { item in
            let users = item.comment.map { $0.commentUser }
            let userNames = users.map { $0.name }
            
            return userNames.contains(commentCheck)
        }
        
        return result
    }
    
    func filteredManager(from data: [Item]) -> [Item] {
        if assignCheck.isEmpty {
            return data
        }
        
        let result = data.filter { item in
            let assigns = item.assignee.map { $0.name }
            return assignCheck.contains { assigns.contains($0) }
        }
        return result
    }
    
    func filteredLabel(from data: [Item]) -> [Item] {
        if labelCheck.isEmpty {
            return data
        }
        
        let result = data.filter { item in
            let labels = item.label.map {$0.labelName}
            return labelCheck.contains { labels.contains($0)}
        }
        
        return result
    }
    
    func filteredMilestone(from data: [Item]) -> [Item] {
        if milestoneCheck.isEmpty {
            return data
        }
        
        let result = data.filter {
            milestoneCheck.contains($0.milestone.milestoneName)
        }
        
        return result
    }
}
