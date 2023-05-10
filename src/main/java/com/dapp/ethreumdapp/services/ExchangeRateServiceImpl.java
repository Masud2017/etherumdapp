package com.dapp.ethreumdapp.services;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Scanner;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.dapp.ethreumdapp.models.ExchangeModel;
import com.dapp.ethreumdapp.models.ExchangeType;

@Service
public class ExchangeRateServiceImpl implements ExchangeRateService {
    @Value("${cryptoExchangeApiUrl}")
    private String cryptoExchangeApiUrl;
    private URL uri;
    private Logger logger = LoggerFactory.getLogger(ExchangeRateServiceImpl.class);

    @Override
    public List<ExchangeModel> getExchangeRateList(ExchangeType exchangeType) throws IOException {
        // setting up the api url and it's properties
        this.uri = new URL(cryptoExchangeApiUrl);
        HttpURLConnection connection = (HttpURLConnection) this.uri.openConnection();
        connection.setDoOutput(true);
        connection.setDoInput(true);
    
        // reading the data that the api return as response in byte code format
        BufferedInputStream inputStream = new BufferedInputStream(connection.getInputStream());
        byte[] byteData = inputStream.readAllBytes();
        // Converting the byte code to String format
        String inputString = new String(byteData,StandardCharsets.UTF_8);
        

        // this.logger.info("Testing the value of cryptoExchangeApiUrl : "+this.cryptoExchangeApiUrl);
        this.logger.info("Checking the data : "+inputString);
        return null;
    }
    
}
