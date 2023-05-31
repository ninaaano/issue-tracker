//
//  File.swift
//  issue-tracker
//
//  Created by apple on 2023/05/31.
//

import Foundation

struct FilteringModel {
    private var stateCheck: [String] = ["open"]
    private var managerCheck: [String] = ["솔"]
    private var labelCheck: [String] = []
    private var milestoneCheck: [String] = []
    
//    func filteredState(from data: [Item]) -> [Item] {
//        if stateCheck.isEmpty {
//            return data
//        }
//
//        let result = data.filter {
//
//        }
//    }
    
    func filteredManager(from data: [Item]) -> [Item] {
        if managerCheck.isEmpty {
            return data
        }
        
        let result = data.filter {
            managerCheck.contains($0.writer.name)
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
