require 'rails_helper'

feature 'user can add thread' do

  before(:each) do
    user1 = FactoryBot.create(:user)
    sign_in_as(user1)
  end

  let(:thread_1) { FactoryBot.build(:thread) }
  let(:thread_2) { FactoryBot.build(:thread, title: '') }
  let(:thread_3) { FactoryBot.build(:thread, description: '') }

  scenario 'user submits completed thread' do

    visit new_thread_path(thread_1)

    fill_in 'Title', with: thread_1.title
    fill_in 'Content', with: thread_1.content

    click_button 'Add New Thread'

    expect(page).to have_content('Thread added successfully')
    expect(page).to have_content('First post')
    expect(page).to have_content('I am planning a trip to Tahoe')
  end

  scenario 'user can not submit blank thread title' do
    visit new_thread_path

    fill_in 'Title', with: thread_2.name
    fill_in 'Content', with: thread_2.description

    click_button 'Add New Thread'
    expect(page).to have_content('Title cannot be blank!')
  end

  scenario 'user can not submit blank thread description' do
    visit new_threads_path

    fill_in 'Title', with: thread_3.name
    fill_in 'Content', with: thread_3.description

    click_button 'Add New Thread'
    expect(page).to have_content('Content cannot be blank!')
  end
end
