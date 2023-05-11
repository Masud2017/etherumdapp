package com.dapp.ethreumdapp.configs;

import com.dapp.ethreumdapp.filters.AuthenticationVerifierFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebSecurity
public class Config {
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private AuthenticationVerifierFilter authenticationVerifier;


    @Bean
    public DaoAuthenticationProvider getDaoAuthenticationProvider() {
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
        daoAuthenticationProvider.setPasswordEncoder(passwordEncoder);
        daoAuthenticationProvider.setUserDetailsService(userDetailsService);

        return daoAuthenticationProvider;
    }

    @Bean
    public SecurityFilterChain filterChain  (HttpSecurity http) throws Exception {
        // FIXME: 5/11/2023  this portion of the http url mapper is ignores any error and redirect to the home page
//        http.
//                authorizeHttpRequests((requests) -> requests
//                        .requestMatchers("/", "/login","/registration","/signup","/css/**","/authenticate","/asset/**", "/public/**","/logout")
//                        .permitAll().anyRequest().authenticated())
//                .formLogin((form) -> form.loginPage("/login")).logout((logout) -> logout.permitAll()).csrf();


        http.
                authorizeRequests().requestMatchers("**/","/login","/signup","/registration","/authenticate","/css/**","/asset/**","/public/**","/logout").permitAll().
                anyRequest().authenticated().and().csrf();


//                http.exceptionHandling().authenticationEntryPoint(authenticationVerifier);


//        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);


        return http.build();

    }

    @Bean
    public AuthenticationManager getAuthenticationProvider (AuthenticationConfiguration authenticationConfiguration)
            throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}
