import Header from "../../components/header/header.js";
import Card from "../../components/ui/card/card";
import Button from "../../components/ui/button/button.js";
import { isLoggedIn } from "../../auth.js";
import { store } from "../../store/index.js";
import "./profile-view.css";

const ProfileScreen = {
  render: async () => {
    const header = await Header.render();
    const cardInstance = Card();
    const buttonInstance = Button();
    const name = isLoggedIn() ? store.state.user.name : "unknown";
    const email = isLoggedIn() ? store.state.user.email : "unknown@gmail.com";
    const image = isLoggedIn() ? store.state.user.image : "";
    const pendingCard = await cardInstance.render(
      `
      <div class="stat-card-body">
        <h3 class="stat-number">0</h3>
        <p class="stat-label">Pending</p>
      </div>
    `,
      "card-pending",
    );

    const approvedCard = await cardInstance.render(
      `
      <div class="stat-card-body">
        <h3 class="stat-number">0</h3>
        <p class="stat-label">Approved</p>
      </div>
    `,
      "card-approved",
    );

    const rejectedCard = await cardInstance.render(
      `
      <div class="stat-card-body">
        <h3 class="stat-number">0</h3>
        <p class="stat-label">Rejected</p>
      </div>
    `,
      "card-rejected",
    );

    const whatsappBtn = await buttonInstance.render(
      `
      <i data-lucide="phone"></i>  
      Add WhatsApp
    `,
      "btn-whatsapp",
    );

    const telegramBtn = await buttonInstance.render(
      `
      <i data-lucide="send"></i>  
      Add Telegram
    `,
      "btn-telegram",
    );

    return `
      <div class="profile-page-wrapper"> 
        ${header}
        
        <main class="profile-container">
          
          <section class="profile-header-block">
            <div class="avatar-container-outer">
              <div class="avatar-frame">
                <div class="avatar-inner-graphic">
                  <img 
                    src=${image} 
                    alt="Zekariyas Amdu Profile Picture" 
                    class="avatar-image-src" 
                  />
                </div>
              </div>
             
            </div>

            <div class="profile-info-details">
              <h1 class="user-display-name">${name}</h1>
              
              <div class="user-email-row">
                <i data-lucide="mail"></i>  
                <span class="user-email-text">${email}</span>
              </div>

              <div class="profile-actions-row">
                ${whatsappBtn}
                ${telegramBtn}
              </div>
            </div>
          </section>

          <section class="profile-stats-grid">
            ${pendingCard}
            ${approvedCard}
            ${rejectedCard}
          </section>

          <section class="profile-content-tabs-wrapper">
            <div class="tabs-navigation-header">
              <button class="tab-link active-tab" data-tab="ads">Ads</button>
            </div>

            <div class="tab-content-viewport">
              <div class="empty-state-card">
                <div class="empty-icon-box">
                  <i data-lucide="archive"></i>  
                </div>
                <h4 class="empty-state-title">No Ads Posted</h4>
                <p class="empty-state-subtitle">You haven't posted any ads yet.</p>
              </div>
            </div>
          </section>

        </main>
      </div>
    `;
  },
  after_render: async () => {
    await Header.after_render();
    const buttonInstance = Button();
    const cardInstance = Card();

    await buttonInstance.after_render(
      ["social-profile-btn"],
      "btn-outline",
      "btn-sm",
      "btn-whatsapp",
    );
    await buttonInstance.after_render(
      ["social-profile-btn"],
      "btn-outline",
      "btn-sm",
      "btn-telegram",
    );

    await cardInstance.after_render(["dashboard-stat-card"], "card-pending");
    await cardInstance.after_render(["dashboard-stat-card"], "card-approved");
    await cardInstance.after_render(["dashboard-stat-card"], "card-rejected");
  },
};

export default ProfileScreen;
