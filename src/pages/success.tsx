import Link from "next/link";
import { SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Head from "next/head";
import { useBagStore } from "../store/bagStore";
import { useEffect } from "react";

interface ISuccess {
  customerName: string;
}

export default function Success({ customerName }: ISuccess) {
  const { cleanBag } = useBagStore((store) => {
    return {
      cleanBag: store.cleanBag
    }
  });

  useEffect(() => {
    cleanBag();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Compra efetuada | Draco Shop</title>
        
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, seu <strong>pedido</strong> já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const customerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      }
    }
  }
}
