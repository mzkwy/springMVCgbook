package com.licyun.util;

import com.licyun.model.User;
import com.licyun.service.UserService;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by 李呈云
 * Description:
 * 2016/9/27.
 */
@Component
public class LoginValid implements Validator {
    public boolean supports(Class<?> klass) {
        return User.class.isAssignableFrom(klass);
    }

    public void validate(Object target, Errors errors) {
        UserService userService = new UserService();
        User user = (User) target;
        ValidationUtils.rejectIfEmpty(errors, "email", "useremail.required");
        ValidationUtils.rejectIfEmpty(errors, "passwd", "userpasswd.required");
        if(userService.isUserEmailExist(user.getEmail())){

        }else{
            errors.rejectValue("email", "useremail.notexist");
        }
        if(userService.findByEmail(user.getEmail()).getPasswd().equals(user.getPasswd())){

        }else{
            errors.rejectValue("passwd", "userpasswd.error");
        }


    }
}