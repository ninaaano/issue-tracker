//
//  UITabBarViewController.swift
//  issue-tracker
//
//  Created by PJB on 2023/05/11.
//

import UIKit

final class TabBarViewController: UITabBarController {
    private(set) var issueView: UINavigationController = {
        let issueView = IssueViewController()
        let navigation = UINavigationController(rootViewController: issueView)
        issueView.navigationItem.rightBarButtonItem = UIBarButtonItem(title: "선택", style: .plain, target: nil, action: nil)
        issueView.navigationItem.leftBarButtonItem = UIBarButtonItem(title: "필터", style: .plain, target: nil, action: #selector(addTapped))
        
        return navigation
    }()
    
    private(set) var labelView = LabelViewController()
    private(set) var mileStoneView = MileStoneViewController()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setViewControllers([issueView, labelView, mileStoneView], animated: false)
        setTabBarColor()
        setTabBarItem()
    }

    private func setTabBarColor() {
        self.view.backgroundColor = .systemBackground
        self.tabBar.layer.backgroundColor = UIColor(red: 0.949, green: 0.949, blue: 0.969, alpha: 1).cgColor
    }
    
    private func setTabBarItem() {
        issueView.tabBarItem = UITabBarItem(title: TabBarType.issue.title, image: UIImage(named: TabBarType.issue.image), tag: 0)
        labelView.tabBarItem = UITabBarItem(title: TabBarType.label.title, image: UIImage(named: TabBarType.label.image), tag: 1)
        mileStoneView.tabBarItem = UITabBarItem(title: TabBarType.milestone.title, image: UIImage(named: TabBarType.milestone.image), tag: 2)
    }
    
    @objc func addTapped() {
        let issueFilterViewController = IssueFilterViewController()
        let issueFilterNavigation = UINavigationController(rootViewController: issueFilterViewController)
        issueView.present(issueFilterNavigation, animated: true)
    }
}
