package team05.codesquad.issuetracker.controller;

import lombok.Getter;

@Getter
public class ResponseData<T> {
    private T data;

    public ResponseData(T data) {
        this.data = data;
    }
}
