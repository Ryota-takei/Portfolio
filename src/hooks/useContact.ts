import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import {Input} from "../types/InputTypes"


export const useContact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();
  const url = process.env.REACT_APP_APP_URL as string

  const sendValue = async (data: Input) => {
    setLoading(true);

    const payload: object = {
      text:
      "お問い合わせがありました\n" +
      "お名前: " +
      data.name +
      "\n" +
      "メールアドレス: " +
      data.email +
      "\n" +
      "【問い合わせ内容】\n" +
      data.contact,
    };

    await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .catch((e) => {
        alert(e.message);
      })
      .finally(() => {
        setLoading(false);
        toast({
          title: "お問合せいただきありがとう御座います。改めてご連絡いたします",
          isClosable: true,
        });
      });
  };

  return { sendValue, loading};
};
