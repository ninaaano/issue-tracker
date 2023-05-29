//
//  HTTP.swift
//  issue-tracker
//
//  Created by PJB on 2023/05/24.
//

import Foundation

struct Response<T: Codable>: Codable {
    let statusCode: Int
    let body: [T]
}

struct HTTPHandler<T: Codable> {
    func fetchIssue(completion: @escaping (Result<[T], Error>) -> Void) {
        guard let url = URL(string: "https://api.codesquad.kr/onban/main") else {
            return
        }
        let request = URLRequest(url: url)
        URLSession.shared.dataTask(with: request) { data, response, error in
            guard let data = data else {
                return
            }
            
            guard let response = response as? HTTPURLResponse, (200 ..< 299) ~= response.statusCode else {
                return
            }
            
            if let error = error {
                completion(.failure(error))
            }
            
            if let issue = self.JSONParse(issueData: dummyData.data(using: .utf8) ?? data) {
                completion(.success(issue))
            }
        }
        .resume()
    }
    
    private func JSONParse(issueData: Data) -> [T]? {
        do {
            let issueData = try JSONDecoder().decode(Response<T>.self, from: issueData)
            return issueData.body
        } catch {
            print(error.localizedDescription)
            return nil
        }
    }
}
