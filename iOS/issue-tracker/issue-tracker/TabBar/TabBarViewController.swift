//
//  UITabBarViewController.swift
//  issue-tracker
//
//  Created by PJB on 2023/05/11.
//

import UIKit

final class TabBarViewController: UITabBarController {
    private let issueView = UINavigationController(rootViewController: IssueViewController())
    private let labelView = LabelViewController()
    private let mileStoneView = MileStoneViewController()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setViewControllers([issueView, labelView, mileStoneView], animated: false)
        configureTabBarColor()
        configureTabBarItem()
    }
    
    private func configureTabBarColor() {
        self.view.backgroundColor = .systemBackground
        self.tabBar.layer.backgroundColor = ColorValue.gray50?.cgColor
    }
    
    private func configureTabBarItem() {
        issueView.tabBarItem = UITabBarItem(title: TabBarType.issue.title, image: UIImage(named: TabBarType.issue.image), tag: 0)
        labelView.tabBarItem = UITabBarItem(title: TabBarType.label.title, image: UIImage(named: TabBarType.label.image), tag: 1)
        mileStoneView.tabBarItem = UITabBarItem(title: TabBarType.milestone.title, image: UIImage(named: TabBarType.milestone.image), tag: 2)
    }
}
