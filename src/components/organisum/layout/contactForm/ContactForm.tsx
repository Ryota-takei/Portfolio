import { set, useForm } from "react-hook-form";
import { Button, DrawerHeader } from "@chakra-ui/react";
import styles from "./ContactForm.module.css";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Spinner } from "@chakra-ui/react";

interface Input {
  name: string;
  email: string;
  contact: string;
}

export const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const toast = useToast();
  const url: any = process.env.REACT_APP_APP_URL;

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <label>
          <p className={styles.labelTitle}>Name</p>
          <input
            type="text"
            placeholder="お名前"
            {...register("name", { required: true, maxLength: 100 })}
          />
          {errors.name && (
            <p className={styles.alert}>お名前をご記入ください</p>
          )}
        </label>
        <label>
          <p className={styles.labelTitle}>Email</p>
          <input
            type="text"
            placeholder="メールアドレス"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          {errors.email && (
            <p className={styles.alert}>正しいメールアドレスをご記入ください</p>
          )}
        </label>
        <label>
          <p className={styles.labelTitle}>Contact</p>
          <textarea
            placeholder="お問い合わせ内容"
            {...register("contact", {
              required: true,
            })}
          />
          {errors.contact && (
            <p className={styles.alert}>お問い合わせ内容をご記入ください</p>
          )}
        </label>
        <div className={styles.btnWrapper}>
          {loading ? (
            <Button
              disabled={true}
              className={styles.btn}
              type="submit"
              colorScheme="teal"
              variant="outline"
            >
              <Spinner />
              送信する
            </Button>
          ) : (
            <Button
              className={styles.btn}
              type="submit"
              colorScheme="teal"
              variant="outline"
            >
              送信する
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};
