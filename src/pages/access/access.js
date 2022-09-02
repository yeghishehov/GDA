import { useState } from "react";
import TextField from "@mui/material/TextField";
import { ImageBG, Wrapper, ImageAccessGranted, PasswordField } from "./mui";

const validPassword = "uuddlrlrBAStart";

export function Access() {
  const [password, setPassword] = useState("");

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      setPassword(e.target.value);
    }
  };

  return (
    <ImageBG>
      <Wrapper>
        {password !== validPassword ? (
          <div>
            <PasswordField
              onKeyDown={handleKeyPress}
              focused
              error={!!password && password !== validPassword}
            />
          </div>
        ) : (
          <ImageAccessGranted />
        )}
      </Wrapper>
    </ImageBG>
  );
}
