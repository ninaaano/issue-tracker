//
//  UITabBarViewController.swift
//  issue-tracker
//
//  Created by PJB on 2023/05/11.
//

import UIKit

final class TabBarViewController: UITabBarController {
    private(set) var issueView = IssueViewController()
    private(set) var labelView = LabelViewController()
    private(set) var mileStoneView = MileStoneViewController()

    override func viewDidLoad() {
        super.viewDidLoad()
        self.setViewControllers([issueView, labelView, mileStoneView], animated: false)
        self.configureColor()
        self.configureTabBarItem()
    }
    
    private func configureColor() {
        self.view.backgroundColor = .systemBackground
        self.tabBar.layer.backgroundColor = UIColor(red: 0.949, green: 0.949, blue: 0.969, alpha: 1).cgColor
    }
    
    private func configureTabBarItem() {
        issueView.tabBarItem = UITabBarItem(title: TabBarType.issue.title, image: UIImage(named: TabBarType.issue.image), tag: 0)
        labelView.tabBarItem = UITabBarItem(title: TabBarType.label.title, image: UIImage(named: TabBarType.label.image), tag: 1)
        mileStoneView.tabBarItem = UITabBarItem(title: TabBarType.milestone.title, image: UIImage(named: TabBarType.milestone.image), tag: 2)
    }
}
