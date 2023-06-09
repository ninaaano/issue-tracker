package team05.codesquad.issuetracker.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import team05.codesquad.issuetracker.controller.issuedto.response.IssuesResponse;
import team05.codesquad.issuetracker.service.IssueService;

@Controller
public class HomeController {

    @GetMapping("/")
    public String Home(Model model){
        return "redirect:/issues";
    }

}
