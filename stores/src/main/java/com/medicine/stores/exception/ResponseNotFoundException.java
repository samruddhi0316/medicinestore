package com.medicine.stores.exception;

public class ResponseNotFoundException extends RuntimeException {

    public ResponseNotFoundException(String message) {
        super(message);
    }
}