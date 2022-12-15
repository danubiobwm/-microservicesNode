import { Content } from "./content";
import { Notification } from "./notification";
describe("Notification ", () => {
  test("It should be able to create a notification", () => {
    const notification = new Notification({
      content: new Content("Nova Solicitação de Amizade"),
      category: "Social",
      recipientId: "example-recipient-id",
    });

    expect(notification).toBeTruthy();
  });
});
