package com.dapp.ethreumdapp.services;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.List;

import com.dapp.ethreumdapp.models.ExchangeModel;
import com.dapp.ethreumdapp.models.ExchangeType;

public interface ExchangeRateService {
    public List<ExchangeModel> getExchangeRateList(ExchangeType exchangeType) throws MalformedURLException, IOException;
}
