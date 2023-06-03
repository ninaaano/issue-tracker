//
//  DiffableDataSourceManager.swift
//  issue-tracker
//
//  Created by PJB on 2023/05/28.
//

import UIKit

protocol DiffableDataSourceManager {
    associatedtype ItemIndetifierType: Hashable
    associatedtype CellType: UICollectionViewCell
    
    func createListCellRegistration() -> UICollectionView.CellRegistration<CellType, ItemIndetifierType>
}
