package com.dapp.ethreumdapp.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.dapp.ethreumdapp.models.ExchangeModel;
import com.dapp.ethreumdapp.models.ExchangeType;
import com.dapp.ethreumdapp.services.ExchangeRateService;

@SpringBootTest
public class TestExchangeRateServiceImpl {
    @Autowired
    private ExchangeRateService exchangeRateService;

    @Test
    public void testGetExchangeRateList() throws MalformedURLException, IOException {
        // given 
        ExchangeType exchangeType = ExchangeType.USD;
        
        // expected
        List<ExchangeModel> exchangeModelListGiven = new ArrayList<>();

        ExchangeModel exchangeModelBDT = new ExchangeModel();
        exchangeModelBDT.setExchangeType(ExchangeType.BDT);
        exchangeModelBDT.setPrice(93.93);

        ExchangeModel exchangeModelBTC = new ExchangeModel();
        exchangeModelBTC.setExchangeType(ExchangeType.BTC);
        exchangeModelBTC.setPrice(0.00004433);        

        ExchangeModel exchangeModelETH = new ExchangeModel();
        exchangeModelETH.setExchangeType(ExchangeType.ETH);
        exchangeModelETH.setPrice(0.0006077);

        exchangeModelListGiven.add(exchangeModelBDT);
        exchangeModelListGiven.add(exchangeModelBTC);
        exchangeModelListGiven.add(exchangeModelETH);

        // got
        List<ExchangeModel> exchangeModelList = this.exchangeRateService.getExchangeRateList(ExchangeType.BTC);

        exchangeModelList.stream()
                                .forEach(item -> exchangeModelListGiven
                                                                    .stream().forEach(item2 -> assertEquals(item, item2)));
    }
    
}
