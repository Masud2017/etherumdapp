package com.dapp.ethreumdapp.utils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Util {
    public static boolean isEmail(String id) {
        Pattern pattern = Pattern.compile(".*\\s?@\\s?.*");
        Matcher matcher = pattern.matcher(id);
        boolean flag = false;

        while (matcher.find()) {
            flag = true;
        }

        if (flag) {
            return true;
        }

        return false;
    }
}
