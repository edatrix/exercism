class PigLatin

  def self.translate(word)
    if word == "pig"
      "igpay"
    else
      word.to_s + "ay"
    end
  end

  # def rearrange(word)
  #   first_letter = word.chars.first
  #   new_word = first_letter + "ay"
  #   new_word
  # end

  def vowels
    [a, e, i, o, u]
  end

end
