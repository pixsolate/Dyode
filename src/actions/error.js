import { NotificationManager } from "react-notifications";
import * as Sentry from "@sentry/browser";

export function showError(msg, sub_msg, ex) {
  if (msg) {
    NotificationManager.error(sub_msg || "", msg);
  }
  if (ex) {
    Sentry.captureException(ex);
  }
}
