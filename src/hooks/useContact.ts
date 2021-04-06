import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface Input {
  name: string;
  email: string;
  contact: string;
}

export const useContact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();
  const url: any = process.env.REACT_APP_APP_URL;
  const { reset } = useForm();

  const onSubmit = async (data: Input) => {
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
      .then(() => {
        reset();
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

  return { onSubmit, loading };
};
