import AccountProfile from "components/account/AccountProfile";
import Layout from "components/layout";
import { CentralizedBox } from "components/styled";
import { useRouter } from "next/router";

/**
 * Page with an account.
 */
export default function Account() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      {slug && (
        <CentralizedBox>
          <AccountProfile address={slug as string} />
        </CentralizedBox>
      )}
    </Layout>
  );
}
