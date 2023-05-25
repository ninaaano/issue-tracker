//
//  HTTP.swift
//  issue-tracker
//
//  Created by PJB on 2023/05/24.
//

import Foundation

struct Response: Codable {
    let statusCode: Int
    let body: [Item]
}

struct HTTPHandler {
    func fetchIssue(completion: @escaping (Result<[Item], Error>) -> Void) {
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
            
            if let issue = self.JSONParse(issueData: data) {
                completion(.success(issue))
            }
        }
        .resume()
    }
    
    func JSONParse(issueData: Data) -> [Item]? {
        do {
            let issueData = try JSONDecoder().decode(Response.self, from: issueData)
            return issueData.body
        } catch {
            print(error.localizedDescription)
            return nil
        }
    }
}
