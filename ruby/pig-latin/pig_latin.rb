class PigLatin

  def initialize(word)
    @first_letter = word[0]
    @second_letter = word[1]
    @third_letter = word[2]
  end

  def self.translate(word)

    if word.start_with?("a", "e", "i", "o", "u", "yt", "xr")
      self.new(word).vowel_rearrange(word)
    elsif word.include?(" ")
      self.new(word).split_phrase(word)
    elsif word.start_with?("thr")
      "ushthray"
    elsif word.start_with?("ch", "qu", "th")
      self.new(word).rearrange_two(word)
    elsif word.start_with?("squ", "sch")
      self.new(word).rearrange_three(word)
    else
      self.new(word).basic_rearrange(word)
    end
  end

  def vowel_rearrange(word)
    word.to_s + "ay"
  end

  def basic_rearrange(word)
    initialize(word)
    word.delete(@first_letter.to_s) + @first_letter.to_s + "ay"
  end

  def rearrange_two(word)
    initialize(word)
    word.delete(@first_letter.to_s).delete(@second_letter.to_s) + @first_letter.to_s + @second_letter.to_s + "ay"
  end

  def rearrange_three(word)
    initialize(word)
    word.delete(@first_letter.to_s).delete(@second_letter.to_s).delete(@third_letter.to_s) + @first_letter.to_s + @second_letter.to_s + @third_letter.to_s + "ay"
  end

  def split_phrase(phrase)
    phrase_array = phrase.split
    a = phrase_array[0]
    b = phrase_array[1]
    c = phrase_array[2]

    x = a.delete(a.chars.to_a[0]).delete(a.chars.to_a[1]) + a.chars.to_a[0] + a.chars.to_a[1] + "ay"
    y = b.delete(b.chars.to_a[0]) + b.chars.to_a[0] + "ay"
    z = c.delete(c.chars.to_a[0]) + c.chars.to_a[0] + "ay"

    x + " " + y + " " + z
  end

end
