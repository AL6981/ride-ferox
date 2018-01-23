require 'rails_helper'

feature 'user can add thread' do
  let(:thread_1) { FactoryBot.create(:thread) }
  let(:thread_2) { FactoryBot.create(:thread, title: '') }
  let(:thread_3) { FactoryBot.create(:thread, description: '') }

  scenario 'user submits completed thread' do

    visit new_thread_path

    fill_in 'Name', with: thread_1.name
    fill_in 'Description', with: thread_1.description

    click_button 'Add New Thread'

    expect(page).to have_content('Thread added successfully')
    expect(page).to have_content('First post')
    expect(page).to have_content('I am planning a trip to Tahoe')
  end

  scenario 'user can not submit blank thread title' do
    visit new_thread_path

    fill_in 'Title', with: thread_2.name
    fill_in 'Description', with: thread_2.description

    click_button 'Add New Thread'
    expect(page).to have_content('Name cannot be blank!')
  end

  scenario 'user can not submit blank thread description' do
    visit new_threads_path

    fill_in 'Name', with: thread_3.name
    fill_in 'Description', with: thread_3.description

    click_button 'Add New Thread'
    expect(page).to have_content('Description cannot be blank!')
  end
end
